import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Politique de Confidentialité
        </h2>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-8">
          <p className="text-gray-700 mb-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">1. Informations que nous collectons</h3>
          <p className="text-gray-700 mb-4">
            Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte. Ces informations incluent votre nom, votre adresse e-mail et votre photo de profil (notamment via l'authentification Google).
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">2. Utilisation des informations</h3>
          <p className="text-gray-700 mb-4">
            Les informations collectées sont utilisées pour fournir, maintenir et améliorer nos services, ainsi que pour communiquer avec vous.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">3. Partage des informations</h3>
          <p className="text-gray-700 mb-4">
            Nous ne partageons pas vos informations personnelles avec des tiers, sauf si cela est nécessaire pour fournir nos services ou si la loi l'exige.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">4. Sécurité</h3>
          <p className="text-gray-700 mb-4">
            Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol et l'accès, l'utilisation ou la modification non autorisés.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">5. Nous contacter</h3>
          <p className="text-gray-700 mb-4">
            Si vous avez des questions concernant cette politique, veuillez nous contacter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
