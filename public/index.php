<?php

use Phalcon\Loader;
use Phalcon\Tag;
use Phalcon\Mvc\Url;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Application;
use Phalcon\DI\FactoryDefault;
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;

try {

// Register an autoloader
    $loader = new Loader();
    $loader->registerDirs(
            array(
                '../app/controllers/',
                '../app/models/'
            )
    )->register();
// Create a DI
    $di = new FactoryDefault();

    $di->set('dispatcher', function() {

        $eventsManager = new \Phalcon\Events\Manager();
        $eventsManager->attach("dispatch:beforeException", function($event, $dispatcher, $exception) {

            //Handle 404 exceptions
            if ($exception instanceof \Phalcon\Mvc\Dispatcher\Exception) {
                $dispatcher->forward(array(
                    'controller' => 'index',
                    'action' => 'show404'
                ));
                return false;
            }

            $dispatcher->forward(array(
                'controller' => 'index',
                'action' => 'show503'
            ));
            return false;
        });

        $dispatcher = new \Phalcon\Mvc\Dispatcher();
        $dispatcher->setEventsManager($eventsManager);
        return $dispatcher;
    }, true);


// Set the database service
    $di['db'] = function() {
        return new DbAdapter(array(
            "host" => "localhost",
            "username" => "root",
            "password" => "",
            "dbname" => "mydb",
            "options" => array(
                PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
            )
        ));
    };

    $di->setShared('session', function() {
        $session = new Phalcon\Session\Adapter\Files();
        $session->start();
        return $session;
    });
// Setting up the view component
    $di['view'] = function() {
        $view = new View();
        $view->setViewsDir('../app/views/');
        return $view;
    };
    $di['url'] = function() {
        $url = new Url();
        $url->setBaseUri('/');
        return $url;
    };
    $di->set('cookies', function() {
        $cookies = new Phalcon\Http\Response\Cookies();
        $cookies->useEncryption(false);
        return $cookies;
    });
// Setup the tag helpers
    $di['tag'] = function() {
        return new Tag();
    };

// Handle the request
    $application = new Application($di);
    echo $application->handle()->getContent();
} catch (Exception $e) {
    echo "Exception: ", $e->getMessage();
}