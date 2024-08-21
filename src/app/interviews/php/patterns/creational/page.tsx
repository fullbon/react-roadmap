import CodeBlock from '@/app/ui/code/code-block';

export default function Creational() {
    return <>
        <h1>Порождающие паттерны проектирования</h1>
        <h2>Абстрактная фабрика</h2>
        <div>
            <CodeBlock
                title={<>
                    Пример с <a
                        target={'_blank'}
                        href={'https://makedev.org/patterns/creational/abstractFactory.html'}>
                        https://makedev.org/
                    </a>
                </>}
                language={'php'}
            >
                {
`<?php

/* Form */

abstract class FormAbstract {}

class WindowsForm extends FormAbstract {}

class LinuxForm extends FormAbstract {}

/* Button */

abstract class ButtonAbstract {}

class WindowsButton extends ButtonAbstract {}

class LinuxButton extends ButtonAbstract {}

/* Label */

abstract class LabelAbstract {}

class WindowsLabel extends LabelAbstract {}

class LinuxLabel extends LabelAbstract {}

/* Factory */

abstract class FormBuilder
{
    abstract public function createForm();

    abstract public function createButton();
}

class WindowsFormBuilder extends FormBuilder
{
    public function createForm()
    {
        return new WindowsForm();
    }

    public function createButton()
    {
        return new WindowsButton();
    }
}

class LinuxFormBuilder extends FormBuilder
{
    public function createForm()
    {
        return new LinuxForm();
    }

    public function createButton()
    {
        return new LinuxButton();
    }
}

$builder = new LinuxFormBuilder();
$form = $builder->createForm();
$button = $builder->createButton();

function createScreen(FormAbstract $form, ButtonAbstract $button)
{
    //create screen
}

createScreen($form, $button);`
                }
            </CodeBlock>
        </div>
    </>
}