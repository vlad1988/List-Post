<?php

use Phalcon\Mvc\Model;

class Temparature extends Model {

    public $idtemperature;
    public $date;
    public $temparature;
    public $patients_idpatients;


    public function initialize()
    {
        $this->belongsTo("patients_idpatients", "Patients", "idtemperature");
    }

}
