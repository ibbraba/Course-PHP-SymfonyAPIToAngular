<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Guesser\Name;
use Faker\Provider\Text;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i=0; $i<5; $i++) {
            $comment = new Comment();
            $comment->setName(Name::class)
            ->setCreatedAt(new \DateTimeImmutable("now"))
            ->setContent(\Faker\Provider\fr_FR\Text::class)    ;
            $manager->persist($comment);
        }
        $manager->flush();
    }
}
