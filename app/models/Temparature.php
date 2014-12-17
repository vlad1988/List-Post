<?php

use Phalcon\Mvc\Model;

class Temparature extends Model {

    public $idtemperature;
    public $date;
    public $temperature;
    public $patients_idpatients;


    public function initialize()
    {
        $this->belongsTo("patients_idpatients", "Patients", "idtemperature");
    }

}
