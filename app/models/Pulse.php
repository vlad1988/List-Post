<?php
use Phalcon\Mvc\Model;

class Pulse extends Model {

    public $idpulse;
    public $date;
    public $pulse;
    public $idpatients;


    public function initialize()
    {
        $this->belongsTo("idpatients", "Patients", "idpulse");
    }

}