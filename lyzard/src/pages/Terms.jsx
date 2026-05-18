import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Conditions d'Utilisation
        </h2>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-8">
          <p className="text-gray-700 mb-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">1. Acceptation des conditions</h3>
          <p className="text-gray-700 mb-4">
            En accédant à ce service, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">2. Utilisation du service</h3>
          <p className="text-gray-700 mb-4">
            Vous vous engagez à utiliser le service uniquement à des fins légales et d'une manière qui n'enfreint pas les droits de, ou ne restreint ni n'empêche l'utilisation et la jouissance du service par une autre personne.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">3. Comptes utilisateurs</h3>
          <p className="text-gray-700 mb-4">
            Pour accéder à certaines fonctionnalités, vous devrez peut-être créer un compte. Vous êtes responsable du maintien de la confidentialité de vos informations de connexion.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">4. Résiliation</h3>
          <p className="text-gray-700 mb-4">
            Nous nous réservons le droit de suspendre ou de résilier votre accès à nos services à tout moment, sans préavis, pour quelque raison que ce soit, y compris une violation de ces conditions.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">5. Modifications</h3>
          <p className="text-gray-700 mb-4">
            Nous pouvons réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce service, vous acceptez d'être lié par la version actuelle de ces conditions d'utilisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
