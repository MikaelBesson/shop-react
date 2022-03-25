<?php

namespace DB;
class DBConnect
{

    private static $_bdd;

    //instancie la connection a la bdd

    private static function setBdd()
    {
        self::$_bdd = new PDO('mysql:host=localhost,dbname=shop-react;charset=utf8', 'root', '');
        self::$_bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    //recupere la connection a la bdd

    protected function getBdd()
    {
        if (self::$_bdd == null)
            self::setBdd();
        return self::$_bdd;
    }

    protected function getAll($table, $obj)
    {
        $items = [];
        $req = $this->getBdd()->prepare('SELECT * FROM' . $table . 'ORDER BY id desc');
        $req->execute();
        while ($data = $req->fetch(PDO::FETCH_ASSOC)) {
            $items[] = new $obj($data);
        }
        return $items;
    }
}