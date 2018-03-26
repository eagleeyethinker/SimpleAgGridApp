import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { CommentService } from '../core/service/comment.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

    gridOptions: any;
    columnDefs: any[];
    rowData: any[];

    constructor(private commentService: CommentService) {
        this.commentService.getAllComments().subscribe(
            (res: any) => { this.rowData = res; }
        );

        this.rowData = this.getAllComments();
        this.gridOptions = <GridOptions>{};
        this.columnDefs = [
            {
                headerName: "Name",
                field: "name",
                width: 400
            },
            {
                headerName: "Email",
                field: "email",
                width: 300
            },
            {
                headerName: "Comments",
                field: "body",
                width: 1180
            }
        ];
    }

    ngOnInit() {
        this.gridOptions = {
            enableSorting: true,
            enableFilter: true,
            rowData: this.rowData,
            columnDefs: this.columnDefs,
            onGridReady: () => {
                this.gridOptions.api.resetColumnState();
                this.gridOptions.api.sizeColumnsToFit();
            }
        }
    }

    getAllComments() {
        var rowData: any;
        this.commentService.getAllComments().subscribe(
            (res: any) => {
                rowData = res._body;
            });
        return rowData;
    }
}