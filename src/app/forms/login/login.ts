import { Component } from '@angular/core';
import { LogInData } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TokenStruct } from '../../app.model'
import { UserLoginService } from './login.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    providers: [UserLoginService]
})

export class LoginForm implements OnInit{
    private logInData: any;
    private logInCondition: boolean;
    private tokenStruct: TokenStruct;
    logeedIn: boolean;
   
    constructor(private loginSvc: UserLoginService){
        this.logInData = new LogInData();
        this.logInCondition = (this.logInData.username && this.logInData.password && this.logInData.keepLoggedIn);
        this.tokenStruct = new TokenStruct();

    }
    ngOnInit(){  
        this.logeedIn = false; 
    }
    logInStatus(){
        return this.logeedIn;
    }
    // logIn(){
    //     this.logInData.setLoginDetails(this.logInData);
    //     if(this.logInData.keepLoggedIn){
    //     UserProfileService.keepUserLoggedIn(this.tokenStruct);
    //     }
    }