import { Component, OnInit } from '@angular/core';
import { JSONComment } from '../json-comment';
import { JsonFetcherService } from '../json-fetcher.service';

@Component({
  selector: 'app-json-display',
  templateUrl: './json-display.component.html',
  styleUrls: ['./json-display.component.css']
})
export class JsonDisplayComponent implements OnInit {
  allJsonComments: Array<JSONComment> = [];

  constructor(private jsonFetcher: JsonFetcherService) { }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments(): void {
    this.jsonFetcher.getJSONFromUrl('https://jsonplaceholder.typicode.com/comments')
      .subscribe((allComments) => {
        this.allJsonComments = allComments;
      });
  }

}
