export const applyPhoneMask = (text: string): string => {
    text = text.replace(/\D/g, ''); // Remove all non-digit characters
    text = text.substring(0, 11); // Limit to 11 digits
    text = text.replace(/^(\d{2})(\d)/g, '($1) $2');
    text = text.replace(/(\d)(\d{4})$/, '$1-$2');
    return text;
};

export const applyCpfMask = (text: string): string => {
    text = text.replace(/\D/g, ''); // Remove all non-digit characters
    text = text.substring(0, 11); // Limit to 11 digits
    text = text.replace(/(\d{3})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return text;
};