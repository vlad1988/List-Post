<?php

use Phalcon\Mvc\Model;

class Users extends Model {

    public $userid;
    public $login;
    public $password;

    public function initialize() {
//        $this->hasMany("idtemperature", "Temparature", "patient_idpatients");
//        $this->hasMany("idpressure", "Pressure", "idpatients");
//        $this->hasMany("idpulse", "Pulse", "idpatients");
        $this->hasMany("userid", "Patients", "userid");
    }

}
