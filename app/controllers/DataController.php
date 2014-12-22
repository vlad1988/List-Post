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

    public function addpressureAction() {
        $this->view->disable();
    }

}
