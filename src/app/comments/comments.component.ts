import { Component, OnInit } from '@angular/core';
import { CommentModel } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentModel[];
  constructor(private commentsService: CommentService) { }

  ngOnInit() {
    this.commentsService.getComments().subscribe(comments => this.comments = comments);
  }

}
