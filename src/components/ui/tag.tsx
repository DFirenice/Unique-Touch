const Tag = ({ content }: { content: string }) => {
    return (
        <div className="capitalize px-4 py-1 border border-text-accent rounded-full inline-block text-brown-dp-1">
            { content }
        </div>
    )
}

export default Tag