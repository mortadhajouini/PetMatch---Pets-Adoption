import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AdminEditProfileChangePasswordComponent } from './admin-edit-profile/admin-edit-profile-change-password.component';
import { AdminEditProfileComponent } from './admin-edit-profile/admin-edit-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminAppointmentsRequestsComponent } from './admin-appointments-requests/admin-appointments-requests.component';
import { AdminAddPetComponent } from './admin-add-pet/admin-add-pet.component';
import { AdminAppointmentsApprovalComponent } from './admin-appointments-approval/admin-appointments-approval.component';
import { AdminPetmatchPetsComponent } from './admin-petmatch-pets/admin-petmatch-pets.component';
import { AdminAdoptionsRequestsComponent } from './admin-adoptions-requests/admin-adoptions-requests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rendezvous', component: RendezvousComponent },
  { path: 'my-pets', component: MyPetsComponent },
  { path: 'admin-edit-profile', component: AdminEditProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'edit-profile/change-password', component: EditProfileChangePasswordComponent },
  { path: 'admin-edit-profile/change-password', component: AdminEditProfileChangePasswordComponent },
  { path: 'edit-pet', component: EditPetComponent },
  { path: 'new-appointment', component: NewAppointmentComponent },
  { path: 'confirmed-appointments', component: ConfirmedAppointmentsComponent },
  { path: 'on-hold-appointments', component: OnHoldAppointmentsComponent },
  { path: 'petmatch-pets', component: PetmatchPetsComponent },
  { path: 'admin-appointments-requests', component: AdminAppointmentsRequestsComponent },
  { path: 'admin-add-pet', component: AdminAddPetComponent },
  { path: 'add-pet', component: AddPetComponent }, // Route for adding a new pet
  { path: 'admin-appointments-approval', component: AdminAppointmentsApprovalComponent },
  { path: 'admin-petmatch-pets', component: AdminPetmatchPetsComponent },
  { path: 'admin-adoptions-requests', component: AdminAdoptionsRequestsComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' },  // Fallback to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
