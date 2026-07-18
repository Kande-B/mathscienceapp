
                // Fetch simple visitor counter
                fetch('https://api.counterapi.dev/v1/profpro/mathsciences/up')
                    .then(res => res.json())
                    .then(data => {
                        if (data && data.count) {
                            document.getElementById('visit-counter').innerText = data.count.toLocaleString('fr-FR');
                        }
                    })
                    .catch(err => console.error('Erreur compteur:', err));
            