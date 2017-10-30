import {Component} from '@angular/core';
import{Router} from '@angular/router';

@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class loginComponent{
    user:{};
    passwordWrong:boolean;
    constructor(private router : Router){
        this.user={"name":"","password":""};
        this.passwordWrong = false;
    }

    validateUser(userDetails:object)
    {
        if(userDetails['password']!=null && userDetails['password']=="123456")
        {
            console.log("logged in successfull");
            this.router.navigate(['sucess']);
        }
        else{
            this.passwordWrong = true;
        }
    }

}