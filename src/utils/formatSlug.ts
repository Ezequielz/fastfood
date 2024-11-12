export function formatText(slug: string) {
    return slug
        .toLowerCase()
        .normalize("NFD") // Descompone caracteres acentuados en partes (ej. "é" => "é")
        .replace(/[\u0300-\u036f]/g, "") // Elimina las tildes
        .replace(/\s+/g, "_"); // Reemplaza espacios con "_"
}