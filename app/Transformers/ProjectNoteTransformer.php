<?php

namespace CodeProject\Transformers;

use League\Fractal\TransformerAbstract;
use CodeProject\Entities\ProjectNote;

class ProjectNoteTransformer extends TransformerAbstract
{

    public function transform(ProjectNote $note)
    {
        return [
            'id' => $note->id,
            'project_id' => $note->project_id,
            'title' => $note->title,
            'note' => $note->note
        ];
    }
}
