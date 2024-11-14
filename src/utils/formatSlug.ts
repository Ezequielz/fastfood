export function formatText(slug: string, category?: string) {
    if (!slug) console.log(slug);

    const formatSlug = slug
        .toLowerCase()
        .normalize("NFD") // Descompone caracteres acentuados en partes (ej. "é" => "é")
        .replace(/[\u0300-\u036f]/g, "") // Elimina las tildes
        .replace(/\s+/g, "_"); // Reemplaza espacios con "_"

    if (category) {
        const formatCategory = category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "_");

        return `${formatSlug}_${formatCategory}`;
    }




    return formatSlug;
}

