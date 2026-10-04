import type { SimpleIcon } from 'simple-icons';
import { siReact, siNextdotjs, siJavascript, siTypescript, siHtml5, siCss, siTailwindcss, siBootstrap, siPhp, siLaravel, siCodeigniter, siNodedotjs, siNestjs, siMysql, siPostgresql, siPrisma, siJsonwebtokens, siKeycloak, siFlutter, siDart, siDocker, siLinux, siVercel, siCloudflare, siGit, siGithub, siPostman, siSwagger, siOpenapiinitiative } from 'simple-icons';
import { skillGroups } from './content';

export type SkillSymbol = 'browser' | 'server' | 'database' | 'phone' | 'cloud' | 'tools' | 'shield' | 'network';
export type Skill = { name: string; logo?: SimpleIcon; symbol?: SkillSymbol };
const logos: Record<string, SimpleIcon> = {
  React: siReact, 'Next.js': siNextdotjs, JavaScript: siJavascript, TypeScript: siTypescript,
  HTML: siHtml5, CSS: siCss, 'Tailwind CSS': siTailwindcss, Bootstrap: siBootstrap,
  PHP: siPhp, Laravel: siLaravel, CodeIgniter: siCodeigniter, 'Node.js': siNodedotjs, NestJS: siNestjs,
  MySQL: siMysql, PostgreSQL: siPostgresql, 'Prisma ORM': siPrisma, JWT: siJsonwebtokens, Keycloak: siKeycloak,
  Flutter: siFlutter, Dart: siDart, Docker: siDocker, Linux: siLinux, Vercel: siVercel, Cloudflare: siCloudflare,
  Git: siGit, GitHub: siGithub, 'GitHub Projects': siGithub, Postman: siPostman, Swagger: siSwagger, OpenAPI: siOpenapiinitiative,
};
const symbols: Record<string, SkillSymbol> = { 'RESTful API': 'server', 'Auth.js': 'shield', 'SSO & RBAC': 'shield', VPS: 'server', 'LAN & WiFi': 'network' };
const skills = (names: string[]): Skill[] => names.map(name => ({ name, logo: logos[name], symbol: symbols[name] }));

export const skillCategories: { title: string; icon: SkillSymbol; skills: Skill[] }[] = [
  { title: 'Frontend', icon: 'browser', skills: skills(skillGroups[0].skills.flatMap(name => name === 'HTML & CSS' ? ['HTML', 'CSS'] : [name])) },
  { title: 'Backend & API', icon: 'server', skills: skills(skillGroups[1].skills) },
  { title: 'Database & Security', icon: 'database', skills: skills(skillGroups[2].skills) },
  { title: 'Mobile', icon: 'phone', skills: skills(skillGroups[3].skills.slice(0, 2)) },
  { title: 'DevOps & Server', icon: 'cloud', skills: skills(skillGroups[3].skills.slice(2)) },
  { title: 'Tools', icon: 'tools', skills: skills(['Git', 'GitHub', 'GitHub Projects', 'Postman', 'Swagger', 'OpenAPI']) },
];
