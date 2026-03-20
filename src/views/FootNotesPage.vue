<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { initFootnotes } from '../assets/js/footnotes.js'

const router = useRouter()

onMounted(() => {
  initFootnotes()
  if (window.location.hash) {
    router.replace({ hash: '' })
  }
})
</script>
<template>
  <main id="main-content">
    <h1>Exemple de notes de bas de page accessibles</h1>

    <h2>Hul Hogan</h2>
    <h3>Biographie</h3>
    <p>
      Terry Eugene Bollea, plus connu sous le nom de Hulk Hogan, né le 11 août 1953 à Augusta
      (Géorgie, États-Unis) et mort le 24 juillet 2025 à Clearwater (Floride, États-Unis) est un
      catcheur, acteur
      <sup>
        <a href="#ndp1" id="ndp1-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>1
        </a>
      </sup>
      et musicien américain.
    </p>

    <h3>Le personnage</h3>
    <p>
      Hulk Hogan est souvent cité comme le catcheur le plus célèbre au monde, la plus grande star de
      cette industrie durant les années 1980
      <sup>
        <a href="#ndp2" id="ndp2-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>2
        </a> </sup
      >, et l'un des catcheurs les plus populaires de tous les temps. Avec sa moustache en fer à
      cheval blonde, son bandana emblématique et ses entrées sur le ring, Hogan a été de nombreuses
      années le visage du catch américain et de la WWF (ancien nom de la WWE), une compagnie dont il
      a largement contribué à l'expansion économique.
    </p>
    <h3>Début de carrière</h3>
    <p>
      Il commence sa carrière de catcheur professionnel en 1977, mais acquiert une renommée mondiale
      lorsque Vince McMahon le fait signer à la World Wrestling Federation, en décembre 1983. Son
      personnage de héros américain a contribué à l'essor du catch professionnel dans les années
      1980, où il a été la tête d'affiche de huit des neuf premières éditions de WrestleMania<sup>
        <a href="#ndp3" id="ndp3-rf" class="sofad-ndb-link">
          <span class="visually-hidden">Note de bas de page </span>3
        </a> </sup
      >, l'événement annuel phare de la WWF. Lors de son premier passage à la WWF, il a été cinq
      fois WWE Champion. Son règne de 1 474 jours est toujours actuellement le plus long de l'ère
      post-WrestleMania. Il est également le premier catcheur à remporter deux fois consécutivement
      le Royal Rumble (en 1990 et 1991). Son match contre André The Giant lors du WWF Main Event le
      5 février 1988 détient toujours des records d'audience télévisée américaine pour le catch avec
      une note Nielsen de 15,2 et 33 millions de téléspectateurs.
    </p>
    <aside class="sofad-ndb" role="note">
      <h2>Notes de bas de page</h2>
      <ol>
        <li>
          <p id="ndp1" class="fn-ct-nb">
            <span class="sr-only">Contenu de la note 1&nbsp;:</span>
          </p>
          <p>Terry Eugene Bollea est le nom civil de Hulk Hogan.</p>
          <p class="fn-rtn">
            <a href="#ndp1-rf">Retour à la lecture</a>
          </p>
        </li>

        <li>
          <p id="ndp2" class="fn-ct-nb">
            <span class="sr-only">Contenu de la note 2&nbsp;:</span>
          </p>
          <p>
            Hulk Hogan est considéré comme l’une des figures les plus populaires de l’histoire du
            catch.
          </p>
          <p class="fn-rtn">
            <a href="#ndp3-rf">Retour à la lecture</a>
          </p>
        </li>
        <li>
          <section aria-labelledby="ndp3">
            <h4 id="ndp3" class="fn-ct-nb">Note 3&nbsp;</h4>
            <p>
              WrestleMania est un événement annuel de catch organisé fin mars ou début avril par la
              World Wrestling Entertainment (WWE) et précédemment connue sous le nom de World
              Wrestling Federation (WWF).
            </p>
            <p class="fn-rtn">
              <a href="#ndp3-rf">Retour à la lecture</a>
            </p>
          </section>
        </li>
      </ol>
    </aside>

    <div class="code-block">
      <button type="button" class="copy-btn">Copier</button>

      <pre>
    <code class="language-scss">
.sofad-ndb {
  color: rgba(0, 0, 0, 0.75);
}
    </code>
  </pre>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

/* ===============================
   Focus global accessible
   =============================== */

:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 2px;
}

/* ===============================
   Appels de notes (dans le texte)
   =============================== */

.sofad-ndb-link {
  /* Typographie */
  font-size: 0.85em;
  font-weight: 600;
  color: #ffffff;

  /* Boîte pill */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 1.4em;
  min-width: 1.4em;
  padding: 0 0.4em;

  line-height: 1;
  vertical-align: baseline;
  margin-left: 0.1em;

  /* Apparence */
  border-radius: 999px;
  background-color: v.$note-bg;
  color: v.$note-text;
  text-decoration: none;
  scroll-margin-top: 1.5rem;
}

/* Hover / focus utilisateur */
.sofad-ndb-link:hover,
.sofad-ndb-link:focus-visible {
  background-color: v.$note-hover-bg;
  color: #000000;
}

/* Focus logique / retour depuis la note */
.sofad-ndb-link.sofad-ndb-focus {
  outline: none; /* ✅ on enlève l’outline intrusif */
  box-shadow: 0 0 0 2px rgba(31, 42, 68, 0.4); /* halo doux bleu */
}

/* ===============================
   Notes de bas de page
   =============================== */

.sofad-ndb {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #d1d5db;

  /* Texte légèrement atténué par défaut */
  color: rgba(0, 0, 0, 0.75);
}

.sofad-ndb ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sofad-ndb li {
  padding: 0.5rem;
  margin-bottom: 1.5rem;
}

/* Note active */
.sofad-ndb li:focus-within {
  background-color: #f9fafb;
  outline: 2px solid #1f2a44; /* même bleu que la pill */
  outline-offset: 4px;
  color: #000000; /* retour à 100 % */
}

/* ===============================
   Ancrages et retours
   =============================== */

.fn-ct-nb {
  scroll-margin-top: 2rem;
}

.fn-rtn {
  font-size: 0.9em;
}
</style>
