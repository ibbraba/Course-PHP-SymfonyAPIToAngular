<?php

namespace App\Controller;

use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use JMS\SerializerBundle\JMSSerializerBundle;
use JMS\Serializer;

class AppController extends AbstractController
{
    /**
     * @Route("/app", name="app")
     * @param CommentRepository $commentRepository
     * @param $container
     * @return Response
     */
    public function index(CommentRepository $commentRepository, Serializer\SerializerInterface $serializer): Response
    {
        $comments = $commentRepository->findAll();


        $comments = $serializer->serialize($comments, "json");


        return $comments;
    }
}
