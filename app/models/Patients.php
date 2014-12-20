<?php

use Phalcon\Mvc\Model;

class Patients extends Model {

    public $idpatients;
    public $name;
    
     public function initialize()
    {
        $this->hasMany("idtemperature", "Temparature", "patient_idpatients");
        $this->hasMany("idpressure", "Pressure", "idpatients");
        $this->hasMany("idpulse", "Pulse", "idpatients");
    }

}
