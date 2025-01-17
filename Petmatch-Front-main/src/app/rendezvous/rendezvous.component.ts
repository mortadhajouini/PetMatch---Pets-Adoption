import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css'],
})
export class RendezvousComponent implements OnInit {
  appointments = [
    { title: 'Visit to Vet Clinic', date: '15th November 2024', time: '10:00 AM' },
    { title: 'Follow-up Checkup', date: '20th November 2024', time: '3:00 PM' },
  ];
isOwner: any;
isManager: any;

  constructor() {}

  ngOnInit(): void {}
}
