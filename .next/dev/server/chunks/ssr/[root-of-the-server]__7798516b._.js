module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0014f6fe4c38e0fcc47be2231e13ad8a22303ec341":"getProfile","00214be4e56c83cdc9e87ef56df30c1f9fef6e8771":"getCertificates","008935267bb0ce3d62b9cf56b6e21f1a84073760d6":"getFooter","00a508d0d17cefbb601de16ef8179fc6d1662bc21f":"getAbout","00ab218449a260e5ff3d9be9f5e6d0fa7205ec6f8f":"getExperience","00c537e95b2978c715729ee04f49dce761234ccc54":"getProjects","00da0bb76795cc880282f407d61ed9e78fde83369c":"getEducation","00dc3778bc27e91a1ad0c10c2f5c2295b58aba548c":"getContact","00f1353d706501832de9f4946dc54f8007bd398fcb":"getHero","40081ca48f0c8858884cd72c14f516ef2e56272ebb":"addExperience","4031141a8ec6c940dde7feca1b603ca7954cc428ae":"addProject","40374fdbf4a4794d6359972ee27fd583fc2299dd9a":"updateProject","404688c0f842692c35ca70fce74f976d95e6624da2":"addCertificate","4048ff2b7d5437d2f7cea4bf9b25f24786ec46a5e5":"updateContact","404e2a0f251a6e78d508c145880851f534f6377c88":"updateAbout","404ecaad09bbda214bb2a0e35b3354c3527b46a5e5":"addEducation","405403fe279bcdde95845c8492f230597108fd92ca":"updateFooter","406864b4fdedad0065d1a3d1a9e92b4e809b1bfb97":"updateEducation","407a578529cfb8021bd4921f001036d827c5bbb811":"updateHero","407ed29c8cfd3034293a8448bd92adb7b32b63b4f6":"deleteCertificate","409004d4a458d51e8f111caa927ccce33cb3fce46b":"addMessage","40907a5941f165eb02a11856866370f20c75cbcac7":"deleteProject","409a89c32b77aacfeab3857f555bfb36de40465f50":"deleteExperience","40a794b03cf88215e3c52dd1eda1a22162b343991c":"updateCertificate","40e11fc793e9ec5beb75344d9cb6e5cb6e0c4c50aa":"updateExperience","40eaf1b1d07f83990fd82feaa908da8750a674d21f":"deleteEducation"},"",""] */ __turbopack_context__.s([
    "addCertificate",
    ()=>addCertificate,
    "addEducation",
    ()=>addEducation,
    "addExperience",
    ()=>addExperience,
    "addMessage",
    ()=>addMessage,
    "addProject",
    ()=>addProject,
    "deleteCertificate",
    ()=>deleteCertificate,
    "deleteEducation",
    ()=>deleteEducation,
    "deleteExperience",
    ()=>deleteExperience,
    "deleteProject",
    ()=>deleteProject,
    "getAbout",
    ()=>getAbout,
    "getCertificates",
    ()=>getCertificates,
    "getContact",
    ()=>getContact,
    "getEducation",
    ()=>getEducation,
    "getExperience",
    ()=>getExperience,
    "getFooter",
    ()=>getFooter,
    "getHero",
    ()=>getHero,
    "getProfile",
    ()=>getProfile,
    "getProjects",
    ()=>getProjects,
    "updateAbout",
    ()=>updateAbout,
    "updateCertificate",
    ()=>updateCertificate,
    "updateContact",
    ()=>updateContact,
    "updateEducation",
    ()=>updateEducation,
    "updateExperience",
    ()=>updateExperience,
    "updateFooter",
    ()=>updateFooter,
    "updateHero",
    ()=>updateHero,
    "updateProject",
    ()=>updateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'data', 'db.json');
async function getDB() {
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Database read error:", error);
        return {
            projects: [],
            messages: [],
            profile: {}
        };
    }
}
async function saveDB(data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
async function getProjects() {
    const db = await getDB();
    return db.projects || [];
}
async function getProfile() {
    const db = await getDB();
    return db.profile || {};
}
async function getHero() {
    const db = await getDB();
    return db.hero || {
        greeting: "Hi all. I am",
        name: "Aimal Dev",
        role: "> Frontend Engineer",
        githubLink: "https://github.com/example"
    };
}
async function updateHero(formData) {
    const db = await getDB();
    db.hero = {
        greeting: formData.get('greeting'),
        name: formData.get('name'),
        role: formData.get('role'),
        githubLink: formData.get('githubLink')
    };
    await saveDB(db);
    return {
        success: true
    };
}
async function getContact() {
    const db = await getDB();
    return db.contact || {
        email: "user@gmail.com",
        phone: "+3598246359"
    };
}
async function updateContact(formData) {
    const db = await getDB();
    db.contact = {
        email: formData.get('email'),
        phone: formData.get('phone')
    };
    await saveDB(db);
    return {
        success: true
    };
}
async function addProject(formData) {
    const db = await getDB();
    let imagePath = "/images/project1.jpg"; // Default
    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
        // Ensure dir exists
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
        } catch  {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                recursive: true
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
        imagePath = `/uploads/${fileName}`;
    }
    const newProject = {
        id: Date.now(),
        title: formData.get('title'),
        description: formData.get('description'),
        tech: formData.get('tech').split(',').map((t)=>t.trim()),
        image: imagePath,
        link: formData.get('link')
    };
    if (!db.projects) db.projects = [];
    db.projects.push(newProject);
    await saveDB(db);
    return {
        success: true
    };
}
async function addMessage(formData) {
    const db = await getDB();
    const newMessage = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        date: new Date().toISOString()
    };
    if (!db.messages) db.messages = [];
    db.messages.push(newMessage);
    await saveDB(db);
    return {
        success: true
    };
}
async function deleteProject(id) {
    const db = await getDB();
    db.projects = db.projects.filter((p)=>p.id !== id);
    await saveDB(db);
    return {
        success: true
    };
}
async function updateProject(formData) {
    const db = await getDB();
    const id = Number(formData.get('id'));
    const projectIndex = db.projects.findIndex((p)=>p.id === id);
    if (projectIndex > -1) {
        let imagePath = db.projects[projectIndex].image;
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
            const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
            } catch  {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                    recursive: true
                });
            }
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
            imagePath = `/uploads/${fileName}`;
        }
        db.projects[projectIndex] = {
            ...db.projects[projectIndex],
            title: formData.get('title'),
            description: formData.get('description'),
            tech: formData.get('tech').split(',').map((t)=>t.trim()),
            link: formData.get('link'),
            image: imagePath
        };
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function getCertificates() {
    const db = await getDB();
    return db.certificates || [];
}
async function addCertificate(formData) {
    const db = await getDB();
    let imagePath = "";
    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileName = `cert-${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
        } catch  {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                recursive: true
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
        imagePath = `/uploads/${fileName}`;
    }
    const newCert = {
        id: Date.now(),
        name: formData.get('name'),
        issuer: formData.get('issuer'),
        date: formData.get('date'),
        link: formData.get('link'),
        image: imagePath
    };
    if (!db.certificates) db.certificates = [];
    db.certificates.push(newCert);
    await saveDB(db);
    return {
        success: true
    };
}
async function updateCertificate(formData) {
    const db = await getDB();
    const id = Number(formData.get('id'));
    if (!db.certificates) return {
        success: false
    };
    const index = db.certificates.findIndex((c)=>c.id === id);
    if (index > -1) {
        let imagePath = db.certificates[index].image || "";
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const fileName = `cert-${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
            const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
            } catch  {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                    recursive: true
                });
            }
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
            imagePath = `/uploads/${fileName}`;
        }
        db.certificates[index] = {
            ...db.certificates[index],
            name: formData.get('name'),
            issuer: formData.get('issuer'),
            date: formData.get('date'),
            link: formData.get('link'),
            image: imagePath
        };
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function deleteCertificate(id) {
    const db = await getDB();
    if (db.certificates) {
        db.certificates = db.certificates.filter((c)=>c.id !== id);
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function getFooter() {
    const db = await getDB();
    return db.footer || {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "contact@example.com"
    };
}
async function updateFooter(formData) {
    const db = await getDB();
    db.footer = {
        github: formData.get('github'),
        linkedin: formData.get('linkedin'),
        twitter: formData.get('twitter'),
        email: formData.get('email')
    };
    await saveDB(db);
    return {
        success: true
    };
}
async function getAbout() {
    const db = await getDB();
    return db.about || {
        bio: "/**\n * About me\n * I have 5 years of experience in web\n * development specializing in Next.js,\n * React, and modern UI libraries like\n * GSAP and Framer Motion.\n *\n * I love solving complex problems and\n * creating immersive web experiences.\n */",
        image: "",
        skills: []
    };
}
async function updateAbout(formData) {
    const db = await getDB();
    let imagePath = db.about?.image || "";
    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileName = `about-${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
        } catch  {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                recursive: true
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
        imagePath = `/uploads/${fileName}`;
    }
    db.about = {
        bio: formData.get('bio'),
        image: imagePath,
        skills: (formData.get('skills') || "").split(',').map((s)=>s.trim()).filter((s)=>s)
    };
    await saveDB(db);
    return {
        success: true
    };
}
async function getExperience() {
    const db = await getDB();
    return db.experience || [];
}
async function addExperience(formData) {
    const db = await getDB();
    let iconPath = "";
    const iconFile = formData.get('icon');
    if (iconFile && iconFile.size > 0 && iconFile.name !== 'undefined') {
        const buffer = Buffer.from(await iconFile.arrayBuffer());
        const fileName = `exp-${Date.now()}-${iconFile.name.replace(/\s/g, '-')}`;
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
        } catch  {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                recursive: true
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
        iconPath = `/uploads/${fileName}`;
    }
    const newExp = {
        id: Date.now(),
        company: formData.get('company'),
        position: formData.get('position'),
        description: formData.get('description'),
        skills: formData.get('skills').split(',').map((t)=>t.trim()),
        icon: iconPath,
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate')
    };
    if (!db.experience) db.experience = [];
    db.experience.push(newExp);
    await saveDB(db);
    return {
        success: true
    };
}
async function updateExperience(formData) {
    const db = await getDB();
    const id = Number(formData.get('id'));
    if (!db.experience) return {
        success: false
    };
    const index = db.experience.findIndex((e)=>e.id === id);
    if (index > -1) {
        let iconPath = db.experience[index].icon;
        const iconFile = formData.get('icon');
        if (iconFile && iconFile.size > 0 && iconFile.name !== 'undefined') {
            const buffer = Buffer.from(await iconFile.arrayBuffer());
            const fileName = `exp-${Date.now()}-${iconFile.name.replace(/\s/g, '-')}`;
            const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(uploadDir);
            } catch  {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                    recursive: true
                });
            }
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName), buffer);
            iconPath = `/uploads/${fileName}`;
        }
        db.experience[index] = {
            ...db.experience[index],
            company: formData.get('company'),
            position: formData.get('position'),
            description: formData.get('description'),
            skills: formData.get('skills').split(',').map((t)=>t.trim()),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            icon: iconPath
        };
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function deleteExperience(id) {
    const db = await getDB();
    if (db.experience) {
        db.experience = db.experience.filter((e)=>e.id !== id);
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function getEducation() {
    const db = await getDB();
    return db.education || [];
}
async function addEducation(formData) {
    const db = await getDB();
    const newEdu = {
        id: Date.now(),
        school: formData.get('school'),
        degree: formData.get('degree'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        description: formData.get('description')
    };
    if (!db.education) db.education = [];
    db.education.push(newEdu);
    await saveDB(db);
    return {
        success: true
    };
}
async function updateEducation(formData) {
    const db = await getDB();
    const id = Number(formData.get('id'));
    if (!db.education) return {
        success: false
    };
    const index = db.education.findIndex((e)=>e.id === id);
    if (index > -1) {
        db.education[index] = {
            ...db.education[index],
            school: formData.get('school'),
            degree: formData.get('degree'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            description: formData.get('description')
        };
        await saveDB(db);
    }
    return {
        success: true
    };
}
async function deleteEducation(id) {
    const db = await getDB();
    if (db.education) {
        db.education = db.education.filter((e)=>e.id !== id);
        await saveDB(db);
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProjects,
    getProfile,
    getHero,
    updateHero,
    getContact,
    updateContact,
    addProject,
    addMessage,
    deleteProject,
    updateProject,
    getCertificates,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    getFooter,
    updateFooter,
    getAbout,
    updateAbout,
    getExperience,
    addExperience,
    updateExperience,
    deleteExperience,
    getEducation,
    addEducation,
    updateEducation,
    deleteEducation
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjects, "00c537e95b2978c715729ee04f49dce761234ccc54", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProfile, "0014f6fe4c38e0fcc47be2231e13ad8a22303ec341", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHero, "00f1353d706501832de9f4946dc54f8007bd398fcb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHero, "407a578529cfb8021bd4921f001036d827c5bbb811", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContact, "00dc3778bc27e91a1ad0c10c2f5c2295b58aba548c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateContact, "4048ff2b7d5437d2f7cea4bf9b25f24786ec46a5e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProject, "4031141a8ec6c940dde7feca1b603ca7954cc428ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addMessage, "409004d4a458d51e8f111caa927ccce33cb3fce46b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "40907a5941f165eb02a11856866370f20c75cbcac7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "40374fdbf4a4794d6359972ee27fd583fc2299dd9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCertificates, "00214be4e56c83cdc9e87ef56df30c1f9fef6e8771", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCertificate, "404688c0f842692c35ca70fce74f976d95e6624da2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCertificate, "40a794b03cf88215e3c52dd1eda1a22162b343991c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCertificate, "407ed29c8cfd3034293a8448bd92adb7b32b63b4f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFooter, "008935267bb0ce3d62b9cf56b6e21f1a84073760d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateFooter, "405403fe279bcdde95845c8492f230597108fd92ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAbout, "00a508d0d17cefbb601de16ef8179fc6d1662bc21f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAbout, "404e2a0f251a6e78d508c145880851f534f6377c88", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExperience, "00ab218449a260e5ff3d9be9f5e6d0fa7205ec6f8f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addExperience, "40081ca48f0c8858884cd72c14f516ef2e56272ebb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateExperience, "40e11fc793e9ec5beb75344d9cb6e5cb6e0c4c50aa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExperience, "409a89c32b77aacfeab3857f555bfb36de40465f50", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEducation, "00da0bb76795cc880282f407d61ed9e78fde83369c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEducation, "404ecaad09bbda214bb2a0e35b3354c3527b46a5e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEducation, "406864b4fdedad0065d1a3d1a9e92b4e809b1bfb97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEducation, "40eaf1b1d07f83990fd82feaa908da8750a674d21f", null);
}),
"[project]/.next-internal/server/app/(site)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(site)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0014f6fe4c38e0fcc47be2231e13ad8a22303ec341",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfile"],
    "00214be4e56c83cdc9e87ef56df30c1f9fef6e8771",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCertificates"],
    "008935267bb0ce3d62b9cf56b6e21f1a84073760d6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooter"],
    "00a508d0d17cefbb601de16ef8179fc6d1662bc21f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbout"],
    "00ab218449a260e5ff3d9be9f5e6d0fa7205ec6f8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExperience"],
    "00c537e95b2978c715729ee04f49dce761234ccc54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"],
    "00da0bb76795cc880282f407d61ed9e78fde83369c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEducation"],
    "00dc3778bc27e91a1ad0c10c2f5c2295b58aba548c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContact"],
    "00f1353d706501832de9f4946dc54f8007bd398fcb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHero"],
    "40081ca48f0c8858884cd72c14f516ef2e56272ebb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addExperience"],
    "4031141a8ec6c940dde7feca1b603ca7954cc428ae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProject"],
    "40374fdbf4a4794d6359972ee27fd583fc2299dd9a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"],
    "404688c0f842692c35ca70fce74f976d95e6624da2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCertificate"],
    "4048ff2b7d5437d2f7cea4bf9b25f24786ec46a5e5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateContact"],
    "404e2a0f251a6e78d508c145880851f534f6377c88",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAbout"],
    "404ecaad09bbda214bb2a0e35b3354c3527b46a5e5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEducation"],
    "405403fe279bcdde95845c8492f230597108fd92ca",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFooter"],
    "406864b4fdedad0065d1a3d1a9e92b4e809b1bfb97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEducation"],
    "407a578529cfb8021bd4921f001036d827c5bbb811",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHero"],
    "407ed29c8cfd3034293a8448bd92adb7b32b63b4f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCertificate"],
    "409004d4a458d51e8f111caa927ccce33cb3fce46b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMessage"],
    "40907a5941f165eb02a11856866370f20c75cbcac7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"],
    "409a89c32b77aacfeab3857f555bfb36de40465f50",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExperience"],
    "40a794b03cf88215e3c52dd1eda1a22162b343991c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCertificate"],
    "40e11fc793e9ec5beb75344d9cb6e5cb6e0c4c50aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateExperience"],
    "40eaf1b1d07f83990fd82feaa908da8750a674d21f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEducation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$site$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(site)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7798516b._.js.map