import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular' , 'React' , 'Vue']
  topichasError = true;
  formSubmitted = false;

  inputuser = new User("Rob" , "test@test.com" , 23232323 , "default" , "morning" , true)

  constructor(private _enrollementservice : EnrollmentService) {};
  
  optionvalidation(value : string){
    if (value=="default")
    {
      this.topichasError = true;
    }
    else 
    {
      this.topichasError = false;
    }
 
  }

  onSubmit(){
    this.formSubmitted = true;
    this._enrollementservice.posttoserver(this.inputuser)
    .subscribe(
      data=> console.log('Sucess' ,data) ,
      error=> console.log('error' , error)
    )
    
  }  

}
