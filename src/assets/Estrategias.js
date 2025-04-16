export const strategies = [
    {
        id: 'estrategia1',
        title: 'Programa de Orientación Vocacional y Proyecto de Vida',
        problems: ['No continuar estudiando', 'Salir a trabajar', 'Cambio de institución'],
        description: 'Construye caminos académicos y laborales mediante pruebas psicométricas, talleres de vida y ferias de oportunidades.',
        timeline: [
            { activity: 'Aplicación de pruebas psicológicas', time: 'Mes 1 y 6', responsible: 'Departamento de Psicología' },
            { activity: 'Taller de Proyecto de Vida', time: 'Mes 2 y 3', responsible: 'Psicólogo' },
            { activity: 'Feria de Universidades y Empleo', time: 'Mes 4 y 10', responsible: 'Dirección Académica' }
        ]
    },
    {
        id: 'estrategia2',
        title: 'Atención a Problemas Familiares',
        problems: ['Problemas familiares', 'Baja momentánea', 'Causa legal'],
        description: 'Contención emocional, formación parental y canalización profesional ante problemáticas del entorno familiar.',
        timeline: [
            { activity: 'Escuela para Padres', time: 'Mensual (10 sesiones)', responsible: 'Psicólogo / Trabajador Social' },
            { activity: 'Canalización Psicológica', time: 'Permanente', responsible: 'Psicólogo / Red de apoyo externo' },
            { activity: 'Círculos de Escucha', time: 'Cada 2 meses', responsible: 'Psicólogo o Tutor' }
        ]
    },
    {
        id: 'estrategia3',
        title: 'Apoyo Económico y Emprendimiento',
        problems: ['Problemas económicos', 'Salida para trabajar'],
        description: 'Otorga apoyo financiero y fomenta proyectos escolares productivos.',
        timeline: [
            { activity: 'Bolsa de Becas Interna', time: 'Mes 1 y 7', responsible: 'Dirección Administrativa' },
            { activity: 'Taller de Educación Financiera', time: 'Mes 3 y 9', responsible: 'Área de Emprendimiento' },
            { activity: 'Programa de Emprendimiento Juvenil', time: 'Mes 4 - 10', responsible: 'Coordinador de Emprendimiento' }
        ]
    },
    {
        id: 'estrategia4',
        title: 'Modelo Educativo Flexible y Reincorporación',
        problems: ['Baja momentánea', 'Salida para trabajar'],
        description: 'Facilita el retorno escolar con horarios adaptables y modalidades híbridas.',
        timeline: [
            { activity: 'Plan de Reincorporación Personalizado', time: 'Cada caso', responsible: 'Coordinador Académico' },
            { activity: 'Flexibilización de Horarios o Clases Virtuales', time: 'Desde Mes 2', responsible: 'Dirección Académica' }
        ]
    },
    {
        id: 'estrategia5',
        title: 'Detección Temprana de Casos de Riesgo',
        problems: ['Todas'],
        description: 'Sistema digital de alertas y formación docente para intervenir a tiempo.',
        timeline: [
            { activity: 'Sistema Digital de Alertas', time: 'Mes 1 - 2', responsible: 'Departamento de Tecnología' },
            { activity: 'Capacitación Docente en Psicología Adolescente', time: 'Mes 3 y 8', responsible: 'Psicólogo' }
        ]
    }
];