<?php

use Phalcon\Mvc\Controller;

class SignupController extends Controller {

    public function indexAction() {
        
    }

    public function loginAction() {
        $login = $this->request->getPost('login');
        $password = $this->request->getPost('password');
        $this->session->set("login", $login);
         if ($this->session->has("login")) {

            $loginUser = $this->session->get("login");
            echo $loginUser;
        } else {
            echo "логин не установлен";
        }
    }

}
