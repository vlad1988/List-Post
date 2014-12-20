<?php

use Phalcon\Mvc\Controller;

class IndexController extends Controller {

    public function indexAction() {
        
    }

    public function patientsAction() {
        $this->view->disable();
        $response = new \Phalcon\Http\Response();
        $this->_isJsonResponse = true;
        $this->response->setContentType('application/json', 'UTF-8');
        $response->setContent(json_encode(Patients::find()->toArray(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE));
        return $response;
    }

    public function templistAction($id = false) {
        $this->view->disable();
        echo json_encode(Temparature::find("patients_idpatients= '" . $id . "'")->toArray(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    }

    public function pressurelistAction($id = false) {
        $this->view->disable();
        echo json_encode(Pressure::find("idpatients= '" . $id . "'")->toArray(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    }

    public function pulselistAction($id = false) {
        $this->view->disable();
        echo json_encode(Pulse::find("idpatients= '" . $id . "'")->toArray(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    }

    public function addPatientAction($name) {
        $patient = new Patients();
        $patient->name = $name;
        if ($patient->save() == false) {
            echo 'Не удалось сохранить';
        } else {
            echo "Отлично, пациент сохранен";
        }
    }

}
