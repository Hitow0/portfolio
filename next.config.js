// next.config.js
module.exports = {
    // Autres configurations...
    generateStaticParams: async () => {
        // Retournez les paramètres statiques souhaités sous forme d'objet.
        return {
            '/': { page: '/' },
            // Ajoutez d'autres routes si nécessaire
            // ...
        };
    },
};
