<?php

use Phalcon\Mvc\Controller;

class IndexController extends Controller {

    public function indexAction() {
        if ($this->session->has("login")) {
            $loginUser = $this->session->get("login");
            $idUser = $this->session->get("id");
            $this->view->setVar("loginUser", $loginUser);
            $this->view->setVar("idUser", $idUser);
        } else {
            $this->response->redirect('signup/login');
        }
    }

    public function patientsAction($id=false) {
        $this->view->disable();
        $response = new \Phalcon\Http\Response();
        $this->_isJsonResponse = true;
        $this->response->setContentType('application/json', 'UTF-8');
        $response->setContent(json_encode(Patients::find("userid= '".$id."'")->toArray(), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE));
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

    public function deletePatientAction($id = false) {
        $patient = Patients::findFirst($id);
        $patient->delete();
        $this->view->disable();
    }

    public function updatePatientAction($id = false, $name = false) {
        $patient = Patients::findFirst($id);
        $patient->name = $name;
        $patient->update();
        $this->view->disable();
    }

    public function show404Action() {
        echo 'Извините, такого пути нет!';
    }

    public function show503Action() {
        echo 'Извините, такого пути нет!';
    }

}
