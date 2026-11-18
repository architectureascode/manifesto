import { GITHUB_ORG, META } from './i18n';
import './audience.css';
import './signature.css';

type Signer = { name: string; linkedin?: string; github?: string };

// Profile links are optional; a missing one is simply not rendered.
const SIGNERS: Signer[] = [
  { name: 'Osvaldo Margato', linkedin: 'https://www.linkedin.com/in/margato', github: 'https://github.com/margato' },
  { name: 'João Araujo', linkedin: 'https://www.linkedin.com/in/joaofaraujo/', github: 'https://github.com/joaofaraujo' },
  { name: 'Osnir Teixeira', linkedin: 'https://www.linkedin.com/in/osnirteixeira/', github: 'https://github.com/osnirmaster' },
];

const ICONS = {
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  ),
  github: (
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  ),
};

function ProfileLink({ kind, url, name }: { kind: keyof typeof ICONS; url: string; name: string }) {
  const label = kind === 'linkedin' ? 'LinkedIn' : 'GitHub';
  return (
    <a className="profile" href={url} target="_blank" rel="noopener" aria-label={`${label}: ${name}`}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        {ICONS[kind]}
      </svg>
    </a>
  );
}

type CompareRow = { topic: string; diagram: string; aac: string };

const COMPARE_EN: CompareRow[] = [
  { topic: 'Made for', diagram: 'Being looked at', aac: 'Being checked' },
  { topic: 'What it holds', diagram: 'Boxes and arrows', aac: 'Typed elements and relationships with a meaning' },
  { topic: 'Rules', diagram: 'A paragraph in a wiki', aac: 'Policies that fail the build' },
  { topic: 'Reader', diagram: 'A person, who interprets it', aac: 'People and agents, who can trust it' },
  { topic: 'When it is wrong', diagram: 'Nobody notices', aac: 'It does not compile' },
];

const COMPARE_PT: CompareRow[] = [
  { topic: 'Feito para', diagram: 'Ser olhado', aac: 'Ser verificado' },
  { topic: 'O que contém', diagram: 'Caixas e setas', aac: 'Elementos com tipo e relações com significado' },
  { topic: 'Regras', diagram: 'Um parágrafo no wiki', aac: 'Policies que quebram o build' },
  { topic: 'Quem lê', diagram: 'Uma pessoa, que interpreta', aac: 'Pessoas e agentes, que podem confiar' },
  { topic: 'Quando está errada', diagram: 'Ninguém percebe', aac: 'Não compila' },
];

function Compare({ rows, diagram, aac }: { rows: CompareRow[]; diagram: string; aac: string }) {
  return (
    <table className="compare">
      <thead>
        <tr>
          <td />
          <th scope="col">{diagram}</th>
          <th scope="col" className="aac">
            {aac}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.topic}>
            <th scope="row">{r.topic}</th>
            <td>{r.diagram}</td>
            <td className="aac">{r.aac}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type AudienceItem = { role: string; text: string };

// Feather-style stroke icons, one per audience item (same order as the lists below)
const AUDIENCE_ICONS = [
  <>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </>,
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>,
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </>,
];

function Audience({ items }: { items: AudienceItem[] }) {
  return (
    <ul className="audience">
      {items.map((it, i) => (
        <li key={it.role}>
          <span className="audience-n">{i + 1}</span>
          <svg
            className="audience-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {AUDIENCE_ICONS[i]}
          </svg>
          <strong>{it.role}</strong>
          <span>{it.text.charAt(0).toUpperCase() + it.text.slice(1)}</span>
        </li>
      ))}
    </ul>
  );
}

const AUDIENCE_EN: AudienceItem[] = [
  { role: 'Software architects', text: 'who want their decisions to outlive the design review.' },
  { role: 'Tech leads', text: 'who need the team and its agents to build what was agreed.' },
  { role: 'Engineering leaders', text: 'such as CTOs, heads of engineering and platform, who answer for consistency, risk and compliance across many teams.' },
  { role: 'Platform and governance teams', text: 'who turn standards into checks instead of documents.' },
  { role: 'Developers and agent builders', text: 'who want a specification they can read, not a picture to interpret from.' },
];

const AUDIENCE_PT: AudienceItem[] = [
  { role: 'Arquitetos de software', text: 'que querem que suas decisões sobrevivam à revisão de design.' },
  { role: 'Tech leads', text: 'que precisam que o time e seus agentes construam o que foi combinado.' },
  { role: 'Líderes de engenharia', text: 'como CTOs e heads de engenharia e de plataforma, que respondem por consistência, risco e compliance em muitos times.' },
  { role: 'Times de plataforma e governança', text: 'que transformam padrões em verificações, e não em documentos.' },
  { role: 'Pessoas desenvolvedoras e quem constrói agentes', text: 'que querem uma especificação para ler, e não um desenho para interpretar.' },
];

function Signature({ label, date }: { label: string; date: string }) {
  return (
    <footer className="signature">
      <p className="label">
        {label}{' '}
        <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">
          ArchitectureAsCode.Dev
        </a>
      </p>
      <ul>
        {SIGNERS.map((s) => (
          <li key={s.name}>
            {s.github && (
              <img className="avatar" src={`${s.github}.png?size=96`} alt="" width="40" height="40" loading="lazy" />
            )}
            <span className="signer-name">{s.name}</span>
            <span className="socials">
              {s.linkedin && <ProfileLink kind="linkedin" url={s.linkedin} name={s.name} />}
              {s.github && <ProfileLink kind="github" url={s.github} name={s.name} />}
            </span>
          </li>
        ))}
      </ul>
      <p className="date">{date}</p>
    </footer>
  );
}

export function HeroEn() {
  return (
    <>
      <p className="kicker">Manifesto</p>
      <h1>
        Stop drawing architecture. <em>Declare it.</em>
      </h1>
      <p className="lede">
        Software is written as code, tested as code, deployed as code.
        <br />
        Yet the architecture that decides what that code may do is still just a drawing.
      </p>
    </>
  );
}

export function ManifestoEn() {
  return (
    <article lang="en">
      <h2>Who should read this</h2>
      <Audience items={AUDIENCE_EN} />
      <div className="divider" role="separator">
        <span />
      </div>

      <h2>The diagram is born dead</h2>
      <p>
        A team spends two weeks on a diagram. The design review approves it, and everyone leaves the
        room sure of what will be built. Three sprints later, a service calls another one
        synchronously, inside the customer request, with a retry loop nobody discussed. The diagram
        never changed. Nobody can say whether that was a mistake, because the diagram never said what
        was allowed.
      </p>
      <p>
        A diagram records an intention at one moment and then starts to drift. And what it means never
        made it onto the page: it stays in the head of whoever drew it. Everyone else sees boxes and
        arrows and has to guess, so they need the author in the room.
      </p>
      <blockquote>The happy path is documented. The real behavior rarely is.</blockquote>

      <h2>What Architecture as Code means</h2>
      <p>
        Architecture as Code (AaC) is the practice of writing the architecture in a language instead of
        drawing it: elements with a type, relationships with a meaning, rules that say what is
        allowed. It lives in the repository, it is reviewed in a pull request, and it has a history.
      </p>
      <p>
        That is different from generating a picture from text/markdown. A diagram made with code is still a
        diagram: it is meant to be looked at. An Architecture as Code is meant to be{' '}
        <strong>checked</strong>. When the architecture is code, you can ask whether it is valid
        before anyone builds it, the same way a building plan is verified by calculation, not by how
        coherent the drawing looks. The diagram stops being the source of truth and becomes one
        perspective of the reality: a view generated from the architecture, never the other way
        around.
      </p>

      <h2>Diagram as code is not Architecture as Code</h2>
      <p>
        Tools that turn text into a picture are useful, and we use them. But the output is still a
        picture. Here is the difference:
      </p>
      <Compare rows={COMPARE_EN} diagram="Diagram as code" aac="Architecture as Code" />

      <h2>Why now</h2>
      <p>
        Generative AI sped up writing and shipping code. The distance between the architecture on
        paper and the system in production grows faster than ever, and the reader of that
        architecture is no longer only a person. An agent that receives a diagram pays tokens to
        interpret an image and may hallucinate what the arrows mean. It needs what a person needs, in
        a form a machine can trust:
      </p>
      <ul>
        <li>well-defined entities and explicit relationships;</li>
        <li>contracts and dependencies;</li>
        <li>policies that say what a change must satisfy.</li>
      </ul>
      <p>
        That is a specification, not a picture. And a specification can give an agent three things no
        diagram can: <strong>context</strong> to read, <strong>guardrails</strong> to respect and{' '}
        <strong>feedback</strong> to correct itself.
      </p>

      <h2>ASL, our answer</h2>
      <p>
        <strong>ASL</strong>, the Architecture Specification Language, is our attempt to make this
        real. You describe applications, databases, queues and the relationships between them in
        plain YAML manifests, next to your code. A compiler reads them and tells you, in a few lines,
        whether the architecture is consistent and follows the rules.
      </p>
      <p>
        It checks the format of every element, the relationships between them and the consistency of
        the whole graph. Then it applies <strong>architectural policies from your own enterprise context</strong>{' '}
        and enforces them on every run. For example:
      </p>
      <ul>
        <li>no shared database between services;</li>
        <li>nothing reaches the PCI scope except through the payments API;</li>
        <li>no synchronous call in a customer request without a timeout;</li>
        <li>every public API behind the gateway.</li>
      </ul>
      <p>
        A rule stops being a paragraph in a wiki that an agent may overlook, and becomes a check
        that fails the build.
      </p>
      <p>
        It needs no model to run, so it costs no tokens and always gives the same answer. It runs in
        the terminal, in the editor, in a pull request and in a pipeline. The architecture stops
        being documentation and becomes a <strong>contract</strong>: a deploy can refuse to go ahead
        if it does not compile.
      </p>

      <h2>What we believe</h2>
      <ul>
        <li>Architecture is alive, not static, and must be governed by mechanisms that adapt to agentic coding.</li>
        <li>Rules should be enforced before coding even starts, through architecture and system design guardrails in your agent harness.</li>
        <li>Intent belongs where the code lives, written down, not left in a meeting or in someone's head.</li>
        <li>Architecture is the input of the code, not the documentation that comes after it.</li>
      </ul>
      <p>
        We do not want to replace architects. We want their decisions to outlive the meeting. We
        refuse to keep architecture in a slide, in a wiki or in the head of whoever drew it. We
        declare it, we check it and only then we build. Governance stops being a document and
        becomes a guardrail.
      </p>
      <blockquote>Declare it. Check it. Build on it.</blockquote>
      <p>
        <a href={META.en.aslDocs}>Read the ASL docs →</a>
      </p>

      <Signature label="Signed by the Core Contributors of" date="2026" />
    </article>
  );
}

export function HeroPt() {
  return (
    <>
      <p className="kicker">Manifesto</p>
      <h1>
        Pare de desenhar a arquitetura. <em>Declare.</em>
      </h1>
      <p className="lede">
        O software é escrito, testado e publicado como código.
        <br />
        Mas a arquitetura que define o que esse código pode fazer continua sendo só um desenho.
      </p>
    </>
  );
}

export function ManifestoPt() {
  return (
    <article lang="pt-BR">
      <h2>Para quem a leitura é recomendada</h2>
      <Audience items={AUDIENCE_PT} />
      <div className="divider" role="separator">
        <span />
      </div>

      <h2>O diagrama já nasce morto</h2>
      <p>
        Um time passa duas semanas em um diagrama. A revisão de design aprova, e todo mundo sai da
        sala certo do que será construído. Três sprints depois, um serviço chama outro de forma
        síncrona, dentro da requisição do cliente, com um loop de retry que ninguém discutiu. O
        diagrama não mudou. Ninguém consegue dizer se aquilo foi um erro, porque o diagrama nunca
        disse o que era permitido.
      </p>
      <p>
        Um diagrama registra uma intenção em um momento e depois começa a divergir. E o que ele
        significa nunca chegou à página: fica na cabeça de quem o desenhou. Todo o resto vê caixas e
        setas e interpreta como pode, então precisa do autor na sala.
      </p>
      <blockquote>O caminho feliz é documentado. O comportamento real raramente é.</blockquote>

      <h2>O que é Arquitetura como Código</h2>
      <p>
        Arquitetura como Código (AaC) é a prática de escrever a arquitetura em uma linguagem em vez de
        desenhá-la: elementos com tipo, relações com significado, regras que dizem o que é permitido.
        Ela vive no repositório, é revisada em um pull request e tem histórico.
      </p>
      <p>
        Isso é diferente de gerar uma imagem a partir de texto/markdown. Um diagrama feito com código continua
        sendo um diagrama: foi feito para ser olhado. Uma Arquitetura como Código foi feita para ser{' '}
        <strong>verificada</strong>. Quando a arquitetura é código, você pode perguntar se ela é válida
        antes de alguém construí-la, do mesmo jeito que a planta de um prédio é verificada por
        cálculo, e não pela coerência do desenho. O diagrama deixa de ser a fonte da verdade e vira
        uma perspectiva da realidade: uma visão gerada a partir da arquitetura, nunca o contrário.
      </p>

      <h2>Diagrama como código não é Arquitetura como Código</h2>
      <p>
        Ferramentas que transformam texto em imagem são úteis, e nós as usamos. Mas o resultado
        continua sendo uma imagem. Esta é a diferença:
      </p>
      <Compare rows={COMPARE_PT} diagram="Diagrama como código" aac="Arquitetura como Código" />

      <h2>Por que agora</h2>
      <p>
        A IA generativa acelerou a escrita e a entrega de código. A distância entre a arquitetura no
        papel e o sistema em produção cresce mais rápido do que nunca, e quem lê essa arquitetura já
        não é só uma pessoa. Um agente que recebe um diagrama gasta tokens para interpretar uma
        imagem e pode alucinar o que as setas significam. Ele precisa do que uma pessoa precisa, em
        uma forma em que a máquina possa confiar:
      </p>
      <ul>
        <li>entidades bem definidas e relações explícitas;</li>
        <li>contratos e dependências;</li>
        <li>policies que dizem o que uma mudança precisa satisfazer.</li>
      </ul>
      <p>
        Isso é uma especificação, não um desenho. E uma especificação dá a um agente três coisas que
        nenhum diagrama dá: <strong>contexto</strong> para ler, <strong>guardrails</strong> para
        respeitar e <strong>feedback</strong> para se corrigir.
      </p>

      <h2>ASL, a nossa resposta</h2>
      <p>
        A <strong>ASL</strong>, a Architecture Specification Language, é a nossa tentativa de tornar
        isso real. Você descreve aplicações, bancos de dados, filas e as relações entre eles em
        manifests YAML simples, ao lado do seu código. Um compilador os lê e diz, em poucas linhas,
        se a arquitetura é consistente e segue as regras.
      </p>
      <p>
        Ele verifica o formato de cada elemento, as relações entre eles e a consistência do grafo
        inteiro. Depois aplica as <strong>policies de arquitetura do seu próprio contexto corporativo</strong>{' '}
        e as faz valer em toda execução. Por exemplo:
      </p>
      <ul>
        <li>nenhum banco de dados compartilhado entre serviços;</li>
        <li>nada alcança o escopo PCI sem passar pela API de pagamentos;</li>
        <li>nenhuma chamada síncrona em uma requisição do cliente sem timeout;</li>
        <li>toda API pública atrás do gateway.</li>
      </ul>
      <p>
        Uma regra deixa de ser um parágrafo no wiki que um agente pode ignorar e vira uma
        verificação que quebra o build.
      </p>
      <p>
        Ela não precisa de um modelo para rodar, então não gasta tokens e dá sempre a mesma
        resposta. Roda no terminal, no editor, em um pull request e em um pipeline. A arquitetura deixa
        de ser documentação e vira um <strong>contrato</strong>: um deploy pode se recusar a seguir
        se ela não compilar.
      </p>

      <h2>No que acreditamos</h2>
      <ul>
        <li>Arquitetura é viva, não estática, e precisa ser governada por mecanismos que se adaptam ao agentic coding.</li>
        <li>Regras devem ser aplicadas antes mesmo de o código começar, por meio de guardrails de arquitetura e de system design no harness do seu agente.</li>
        <li>A intenção pertence ao lugar onde o código vive, escrita, e não solta em uma reunião ou na cabeça de alguém.</li>
        <li>A arquitetura é a entrada do código, e não a documentação que vem depois dele.</li>
      </ul>
      <p>
        Não queremos substituir arquitetos. Queremos que as decisões deles sobrevivam à reunião.
        Recusamos manter a arquitetura em um slide, em um wiki ou na cabeça de quem a desenhou.
        Nós a declaramos, a verificamos e só então construímos. Governança deixa de ser um documento
        e vira um guardrail.
      </p>
      <blockquote>Declare. Verifique. Construa em cima.</blockquote>
      <p>
        <a href={META.pt.aslDocs}>Leia a documentação da ASL →</a>
      </p>

      <Signature label="Assinado pelos Core Contributors da" date="2026" />
    </article>
  );
}
