import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
  user: {
    id: number,
    username: string,
    name: string,
    status: string
  };

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {

    this.user = this.usersService.getUser(+this.route.snapshot.params['id']);

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user = this.usersService.getUser(+params['id']);
        }
      );

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
