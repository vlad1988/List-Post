<?php

use Phalcon\Mvc\Controller;

class SignupController extends Controller {

    public function indexAction() {
        
    }

    public function loginAction() {
        $login = $this->request->getPost('login');
        $password = $this->request->getPost('password');

        $user = Users::findFirst(array(
                    "login = ?0",
                    "bind" => array($login)
        ));

        if ($user) {
            $user = Users::findFirst("login='" . $login . "'");
            $this->session->set("login", $login);
            $this->session->set("password", $password);
            $this->session->set("id", $user->userid);
            $this->response->redirect('');
        } else {
            $this->response->redirect('signup/index');
        }


        if ($this->session->has("login")) {
            $loginUser = $this->session->get("login");
            echo $loginUser;
        } else {
            echo "логин не установлен";
        }
    }

    public function viewsessionAction() {
        if ($this->session->has("login")) {

            $loginUser = $this->session->get("login");
            echo $loginUser;
        } else {
            echo "логин не установлен";
        }
    }

    public function logoutAction() {
        $this->session->remove("login");
        $this->response->redirect('signup/index');
    }

}
