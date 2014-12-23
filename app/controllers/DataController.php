<?php

use Phalcon\Mvc\Controller;

class DataController extends Controller {

    public function indexAction() {
        $this->view->disable();
    }

    public function addtemperatureAction($id = false, $date = false, $temp = false) {
        $this->view->disable();
        $temperature = new Temparature();
        $temperature->patients_idpatients = $id;
        $temperature->date = $date;
        $temperature->temparature = $temp;
        if ($temperature->save() == false) {
            echo 'Не удалось сохранить';
        } else {
            echo "Отлично, пациент сохранен";
        }
    }

    public function deletetemperatureAction($id, $date) {
        $temperature = Temparature::find("date='" . $date . "' and patients_idpatients='" . $id . "'");
        $temperature->delete();
        $this->view->disable();
    }
    
    public function deletepulseAction($id, $date) {
        $pulse = Pulse::find("date='" . $date . "' and idpatients='" . $id . "'");
        $pulse->delete();
        $this->view->disable();
    }
    
    public function deletepressureAction($id, $date){
        $pressure = Pressure::find("date='" . $date . "' and idpatients='" . $id . "'");
        $pressure->delete();
        $this->view->disable();
    }

    public function addpulseAction($id = false, $date = false, $pvalue = false) {
        $this->view->disable();
        $pulse = new Pulse();
        $pulse->idpatients = $id;
        $pulse->date = $date;
        $pulse->pulse = $pvalue;
        if ($pulse->save() == false) {
            echo 'Не удалось сохранить';
        } else {
            echo "Отлично, данные пульса пациента сохранены";
        }
    }

    public function addpressureAction($id = false, $date = false, $systolic = false, $diastolic = false) {
        $this->view->disable();
        $pressure = new Pressure();
        $pressure->date = $date;
        $pressure->systolic = $systolic;
        $pressure->diastolic = $diastolic;
        $pressure->idpatients = $id;
        if ($pressure->save() == false) {
            echo 'Не удалось сохранить';
        } else {
            echo "Отлично, данные давления пациента сохранены";
        }
    }

}
