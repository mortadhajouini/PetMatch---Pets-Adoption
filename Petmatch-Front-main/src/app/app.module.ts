import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditProfileChangePasswordComponent } from './edit-profile/edit-profile-change-password.component';
import { ConfirmedAppointmentsComponent } from './confirmed-appointments/confirmed-appointments.component';
import { OnHoldAppointmentsComponent } from './on-hold-appointments/on-hold-appointments.component';
import { PetmatchPetsComponent } from './petmatch-pets/petmatch-pets.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminEditProfileComponent } from './admin-edit-profile/admin-edit-profile.component';
import { AdminEditProfileChangePasswordComponent } from './admin-edit-profile/admin-edit-profile-change-password.component';
import { AdminAppointmentsRequestsComponent } from './admin-appointments-requests/admin-appointments-requests.component';
import { AdminAddPetComponent } from './admin-add-pet/admin-add-pet.component';
import { AdminAppointmentsApprovalComponent } from './admin-appointments-approval/admin-appointments-approval.component';
import { AdminPetmatchPetsComponent } from './admin-petmatch-pets/admin-petmatch-pets.component';
import { AdminAdoptionsRequestsComponent } from './admin-adoptions-requests/admin-adoptions-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ShopComponent,
    ProfileComponent,
    RendezvousComponent,
    MyPetsComponent,
    EditProfileComponent,
    EditPetComponent,
    NewAppointmentComponent,
    AddPetComponent,
    EditProfileChangePasswordComponent,
    ConfirmedAppointmentsComponent,
    OnHoldAppointmentsComponent,
    PetmatchPetsComponent,
    AdminProfileComponent,
    AdminEditProfileComponent,
    AdminEditProfileChangePasswordComponent,
    AdminAppointmentsRequestsComponent,
    AdminAddPetComponent,
    AdminAppointmentsApprovalComponent,
    AdminPetmatchPetsComponent,
    AdminAdoptionsRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // <-- Add FormsModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
