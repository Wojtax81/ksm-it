import { DeepPartial } from 'react-hook-form'
import { Home } from '../../sanity.types'

const homeFallback: DeepPartial<Home> = {
	hero: {
		heading: 'Fast & Secure SAP System Management',
		subtitle:
			'Secure, optimize, and update your SAP systems with tailored solutions that boost performance and reduce downtime.',
		badge: 'Over 500 Systems Installed',
		cta: 'Boost Your System Now',
		trustedBy: {
			heading: 'Trusted By'
		}
	},
	services: {
		sectionHeading: {
			badge: 'Core Services',
			title: 'The Foundation of Your Success',
			description: 'Core services designed to strengthen, secure, and scale your systems'
		},
		cards: {
			basisConsulting: {
				title: 'Basis Consulting',
				description:
					'Expert support for SAP Basis administration, ensuring your system is robust, efficient, and aligned with your business needs'
			},
			s4Hana: {
				title: 'S/4HANA ® Migrations',
				description:
					'Seamlessly transition to S/4HANA with a guided migration process, minimizing downtime and preparing your system for future growth'
			},
			security: {
				title: 'Security & Backup',
				description:
					'Protect your data with comprehensive security solutions and reliable backups, ensuring your SAP environment is secure and resilient'
			}
		}
	},
	howItWorks: {
		sectionHeading: {
			title: 'How we bring Your vision to life',
			badge: 'How It Works',
			description:
				'From consultation to ongoing support, we ensure a smooth journey towards a fully optimized and secure system'
		},
		cards: [
			{
				title: 'Consultation',
				description:
					'We start by discussing your specific goals and needs, assessing your current setup to identify areas for improvement and potential solutions.'
			},
			{
				title: 'Solution Design',
				description:
					'Based on our findings, we create a tailored plan that includes system optimization, migration strategies, and security enhancements aligned with your business.'
			},
			{
				title: 'Implementation & Support',
				description:
					'Our team implements the solutions, ensuring everything runs smoothly, with continuous monitoring and support to maintain optimal performance and security.'
			}
		]
	},
	benefits: {
		sectionHeading: {
			title: "Elevate Your System for What's Next",
			badge: 'Benefits',
			description: "Achieve a system that's always ready, always secure, and built to grow with you."
		},
		bento: {
			cta: 'Launch Your SAP Now',
			scalability: {
				title: 'Future-Ready Scalability',
				description:
					'Easily adapt as your business grows with flexible, scalable solutions that make expanding your system simple and seamless.'
			},
			efficiency: {
				title: 'Improved Efficiency',
				description:
					'Experience faster response times and smooth workflows, designed to keep your systems running at peak performance without extra effort.'
			},
			security: {
				title: 'Enhanced Security',
				description: 'Keep your system safe with constant monitoring and advanced threat protection.'
			},
			support: {
				title: 'Reliable Support',
				description:
					'Rely on proactive support to prevent issues before they arise, ensuring consistent performance and minimized downtime.'
			}
		}
	},
	faq: {
		sectionHeading: {
			badge: 'FAQs',
			title: 'Frequently Asked Questions',
			description: 'Get answers to our most commonly asked questions.'
		}
	},
	contact: {
		sectionHeading: {
			title: 'Take the First Step Towards Optimization',
			badge: 'Contact',
			description: 'Contact us for a personalized consultation and see how we can transform your SAP environment.'
		},
		details: {
			phone: {
				title: 'Our Phone',
				contacts: ['06201 / 690 11 28', '0172 / 759 12 26']
			},
			email: {
				title: 'Our Email',
				contacts: ['info@ksmconsulting.de']
			},
			address: {
				title: 'Our Address',
				contacts: ['Hauptstr.78', '69514 Laudenbach']
			}
		},
		form: {
			title: 'Get In Touch',
			fields: {
				name: {
					label: 'Full Name*',
					error: 'Please enter your full name'
				},
				email: {
					label: 'Email*',
					error: 'Please enter a valid email address'
				},
				phone: {
					label: 'Phone',
					error: 'Please enter a valid phone number'
				},
				message: {
					label: 'Message*',
					error: 'Please enter a message'
				}
			},
			submit: 'Send The Message',
			notification: {
				error: 'An error occurred while sending the message. Please try again later.',
				success: 'Message sent successfully!'
			},
			privacyPolicy: 'By submitting this form, you agree to our {Privacy Policy}.'
		}
	}
}

export const fallbackContent = {
	home: homeFallback
}

export type FallbackContent = typeof fallbackContent
