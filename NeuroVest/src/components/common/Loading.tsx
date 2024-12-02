interface Loading {
    styles: string
}

export default function Loading({ styles }: Loading) {
    return (
        <div className="h-full flex items-center justify-center my-auto">
            <img src='/loading.gif' className={`m-0 p-0 ${styles}`} />
        </div>
    )
}
