import Accordion from 'react-bootstrap/Accordion';

const AccordionAnno = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" className='mb-2'>
                <Accordion.Header className=' '><p className='ff_Medium grey fs_xl fw_700 '>Annotab Studio</p></Accordion.Header>
                <Accordion.Body>
                    <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 pb-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                    <a href="#" className=' ff_Bold  fs_md  darkblue learn_more_btn d-inline-block mb-4'>Learn More</a>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-2'>
                <Accordion.Header className=''><p className=' ff_Medium grey fs_xl fw_700 '>Video Annotab </p></Accordion.Header>
                <Accordion.Body>
                    <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 pb-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                    <a href="#" className=' ff_Bold  fs_md  darkblue learn_more_btn d-inline-block mb-4'>Learn More</a>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='mb-2'>
                <Accordion.Header><p className=' ff_Medium grey fs_xl fw_700 '>Images Annotab </p></Accordion.Header>
                <Accordion.Body>
                    <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 mb-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                    <a href="#" className=' ff_Bold  fs_md  darkblue learn_more_btn d-inline-block mb-5'>Learn More</a>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='mb-2'>
                <Accordion.Header><p className=' ff_Medium grey fs_xl fw_700 '>Annoations</p></Accordion.Header>
                <Accordion.Body>
                    <p className=' ff_Book  fs_sm grey  fw_300 max_width_438 mb-4'>Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum. Ultricies in integer semper pharetra. Facilisi neque nec id proin eu vestibulum.  proin eu vestibulum.</p>
                    <a href="#" className=' ff_Bold  fs_md  darkblue learn_more_btn d-inline-block mb-5'>Learn More</a>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionAnno