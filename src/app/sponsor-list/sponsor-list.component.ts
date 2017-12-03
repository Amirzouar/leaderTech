import {Component, OnInit} from '@angular/core';
import {SponsorListService} from './sponsor-list.service';
import {Sponsor} from './sponsor.model';

@Component({
    selector: 'sponsor-list',
    templateUrl: './Sponsor-list.component.html'
})
export class SponsorListComponent implements OnInit {
    sponsors = [] as Sponsor[];

    constructor(private sponsorListService: SponsorListService) {}

    ngOnInit() {
        this.sponsorListService.getAll().subscribe(response => {
            this.sponsors = response;
        })
    }
}