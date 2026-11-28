interface PreviewSectionTitleProps {
    title: string;
}

export function PreviewSectionTitle({
    title,
}: PreviewSectionTitleProps) {
    return (
        <h3 className="text-base font-semibold text-slate-900">
            {title}
        </h3>
    );
}