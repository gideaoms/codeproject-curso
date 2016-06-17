<?php

namespace CodeProject\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use CodeProject\Entities\ProjectNote;
use CodeProject\Presenters\ProjectNotePresenter;

class ProjectNoteRepositoryEloquent extends BaseRepository implements ProjectNoteRepository
{

    public function model()
    {
        return ProjectNote::class;
    }

    public function presenter()
    {
        return ProjectNotePresenter::class;
    }

}
