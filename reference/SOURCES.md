# Content sources

- Profile, role, email, GitHub, LinkedIn, summary, experience, education, certification and technical skills: root `CV_Robi Aulia Kurniawan.pdf`, inspected as text and both rendered pages on 2 October 2026.
- Portrait: root `foto.png`, unchanged copy in public/foto.png.
- Projects: https://portofolio.robiaulia.online, fetched on 2 October 2026. Snapshot: portfolio-source.html. Project descriptions shortened without adding technologies or claims absent from the source.
- Local project images are copies from the source site's `/projects/` directory: sidomulyo.png, ppid.png, nakertrans.png, ayunda.png, dmd.png, siga.png, lpju.png, pasar.png, portofolio.png.
- Project destinations match the links in the source HTML. Source placeholder mailto and social links were replaced with the actual CV contacts.
- No CV phone number or private address was added to the webpage. The downloadable CV is the original document provided for portfolio use.

## Mapping

| Section | Design reference | Content source |
| --- | --- | --- |
| Home | header.html | CV and foto.png |
| About | about-me.html | CV professional summary and highlights |
| Experience | experience.html | CV work history, education, certification |
| Projects | project.html | Nine projects from the previous site |
| Skills | skills.html | CV technical skills and development tools |
| Contact | contact.html | CV email and social URLs |

Technical setup checked against installed Next.js documentation and https://nextjs.org/docs/app/getting-started/installation.
