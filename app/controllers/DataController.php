<?php

use Phalcon\Mvc\Controller;

class DataController extends Controller {

    public function indexAction() {
        $this->view->disable();
    }

    public function addtemperatureAction($id = false, $date = false, $temp = false) {
        $this->view->disable();
//        echo $id;
//        echo $date;
//        echo '---';
//        echo gettype($temp);
//        echo '---';
//        $dbnumOfTemp = (double)$temp;
//        echo gettype($dbnumOfTemp);
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

    public function addpressureAction() {
        $this->view->disable();
    }

    public function addpulseAction() {
        $this->view->disable();
    }

}
