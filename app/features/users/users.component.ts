import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderDirective } from '../../directives/header.directive';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
    selector: 'users',
    templateUrl: 'app/features/users/users.view.html',
    styleUrls: ['app/features/users/users.style.css'],
    providers: [UserService]
})

export class UsersComponent implements OnInit, OnDestroy{ 
    
    users: User[];
    subscription: any;
        
    constructor(private userService: UserService) { }
    
    ngOnInit(){
        console.log('Iniciado');
        
        this.subscription = this.userService.getUsers().subscribe((usersDoServico:User[]) => {
            this.users = usersDoServico
        }, 
        error => {
            console.log(error)
        });
    }
    
    ngOnDestroy(){
        console.log('Destruído');
        this.subscription.unsubscribe();
    }
    
}