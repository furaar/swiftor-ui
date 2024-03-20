import React from 'react'
import { ContextMenu } from 'primereact/contextmenu';


const Context = () => {
    const items = [
        {
            label: 'Autocorrect',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        }, {
            label: 'Export',
            icon: 'pi pi-external-link',
            items: [
                {
                    label: 'Word',
                    icon: 'pi pi-file-word'
                },
                {
                    label: 'PDF',
                    icon: 'pi pi-file-pdf'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];
    return (
        <ContextMenu global model={items} breakpoint="767px" />
    )
}

export default Context