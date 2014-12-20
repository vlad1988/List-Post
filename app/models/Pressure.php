<?php
use Phalcon\Mvc\Model;

class Pressure extends Model {

    public $idpressure;
    public $date;
    public $diastolic;
    public $systolic;
    public $idpatients;


    public function initialize()
    {
        $this->belongsTo("idpatients", "Patients", "idpressure");
    }

}