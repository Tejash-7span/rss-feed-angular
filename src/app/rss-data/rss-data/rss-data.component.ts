import xml2js from 'xml2js'; 
import { Component, OnInit, TemplateRef } from '@angular/core';
import { RssDataService } from '../rss-data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-rss-data',
  templateUrl: './rss-data.component.html',
  styleUrls: ['./rss-data.component.css']
})
export class RssDataComponent implements OnInit {

  xmlData: any;
  items: any = [];
  modalRef?: BsModalRef;
  currentData: any;

  constructor(private rssDataService: RssDataService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadXMLData();
  }

  loadXMLData() {
    /*Read Data*/ 
    this.rssDataService.getXmlData().subscribe((data) => { 
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        this.xmlData = result;
        this.items = this.xmlData?.RSS?.CHANNEL[0]?.ITEM
      });
    });  
  }

  openModal(template: TemplateRef<any>, modalData) {
    this.currentData = modalData;
    this.modalRef = this.modalService.show(template);
  }

}
